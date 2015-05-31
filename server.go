package main

import (
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Static("/", "public")
	e.ServeFile("/home", "public/index.html")
	e.Run(":3000")
}
