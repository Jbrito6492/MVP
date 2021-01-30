package handler

import "github.com/gofiber/fiber"

// Routes handles all routes to api
func Routes(app *fiber.App) {
	app.Get("/users", user.retreiveUsers)
	app.Get("/main", user.authenticate)
	app.Post("/register", user.register)
	app.Post("/login", user.login)
	app.Post("/logout", user.logout)

	app.Post("/hashtag", user.createHashtag)
	app.Patch("/hashtag", user.deleteHashtag)
	app.Get("/hashtag", user.getHashtags)

	app.Post("/coords", location.saveLocation)
	app.Post("/mapradius", location.saveRadius)
}
