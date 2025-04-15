package main

import (
	"log"
	"pils_app/config"

	"github.com/gin-gonic/gin"
)

func main() {
	// Загрузка конфигурации
	cfg := config.LoadConfig()

	// Инициализация роутера
	r := gin.Default()

	// Настройка маршрутов
	setupRoutes(r)

	// Запуск сервера
	log.Printf("Server starting on port %d", cfg.Port)
	if err := r.Run(":" + string(cfg.Port)); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}

func setupRoutes(r *gin.Engine) {
	// Группа маршрутов для аутентификации
	auth := r.Group("/auth")
	{
		auth.POST("/register", authController.Register)
		auth.POST("/login", authController.Login)
		auth.POST("/verify-otp", authController.VerifyOTP)
	}

	// Группа маршрутов для пользователей
	users := r.Group("/users")
	users.Use(authMiddleware)
	{
		users.GET("/profile", userController.GetProfile)
		users.PUT("/profile", userController.UpdateProfile)
		users.GET("/favorites", userController.GetFavorites)
		users.POST("/favorites/:product_id", userController.AddFavorite)
		users.DELETE("/favorites/:product_id", userController.RemoveFavorite)
	}

	// Группа маршрутов для корзины
	cart := r.Group("/cart")
	cart.Use(authMiddleware)
	{
		cart.GET("/", cartController.GetCart)
		cart.POST("/add", cartController.AddItem)
		cart.PUT("/:item_id", cartController.UpdateItem)
		cart.DELETE("/:item_id", cartController.RemoveItem)
	}

	// Группа маршрутов для заказов
	orders := r.Group("/orders")
	orders.Use(authMiddleware)
	{
		orders.POST("/", orderController.CreateOrder)
		orders.GET("/", orderController.GetOrders)
		orders.GET("/:id", orderController.GetOrder)
		orders.PUT("/:id/cancel", orderController.CancelOrder)
	}

	// Группа маршрутов для платежей
	payments := r.Group("/payments")
	payments.Use(authMiddleware)
	{
		payments.POST("/click/prepare", paymentController.PrepareClickPayment)
		payments.POST("/click/complete", paymentController.CompleteClickPayment)
		payments.POST("/payme/prepare", paymentController.PreparePaymePayment)
		payments.POST("/payme/complete", paymentController.CompletePaymePayment)
	}
}
