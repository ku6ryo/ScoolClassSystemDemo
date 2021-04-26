import express from "express"
import setUpDb from "./repositories/db/setUpDb"
import AccountRepository from "./repositories/AccountRepository"
import AccountApplication from "./applications/AccountApplication"
import AccountEntrypoint from "./entrypoints/AccountEntrypoint"
import EntrypointRequest from "./entrypoints/EntrypointRequest"
import PermissionService from "./services/PermissionService"
import Account from "./models/Account.model"
import Name from "./models/Name.model"
import parseCreateAccountRequest from "./models/CreateAccountRequest.parser"

export default async function configureApp (expressApp: express.Application) {
  const connection = await setUpDb()
  const ep = new AccountEntrypoint(
    new AccountApplication(
      new AccountRepository(connection),
      new PermissionService()
    )
  )
  expressApp.use(express.json())
  expressApp.use((
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.method === "POST") {
      const payload = {
        ...req.body,
      }
      const account = new Account(
        "d72fcb6d-ce8b-4c41-a026-f0903e0aae15",
        0,
        "ku6ryo@gmail.com",
        new Name("ryo", "Kuroyanagi")
      )
      const r = new EntrypointRequest(account, parseCreateAccountRequest(payload))
      ep.createAccount(r)
      res.json({ a: 1 })
    } else {
      next()
    }
  })
}
