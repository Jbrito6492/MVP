package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jbrito6492/themove/MVP/api/database"
	"github.com/jbrito6492/themove/MVP/api/handler"
)

const port = ":3000"

func main() {
	app := fiber.New()
	database.ConnectToMongoDB()
	app.Use("/", handler.Routes(app))
	app.Listen(port)
}
