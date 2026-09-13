package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// Initialize a new Fiber app
	app := fiber.New()

	// Define a route for GET requests to "/"
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	// Start server on port 3000
	log.Fatal(app.Listen(":3000"))
}