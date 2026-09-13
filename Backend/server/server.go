package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	// Allow requests from React frontend
	app.Use(cors.New())

	app.Get("/home", func(c *fiber.Ctx) error {
		return c.SendStatus(fiber.StatusOK)
	})

app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Listen("127.0.0.1:3000")
}