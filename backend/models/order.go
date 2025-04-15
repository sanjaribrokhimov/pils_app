package models

import (
	"time"
)

type OrderStatus string

const (
	OrderStatusPending    OrderStatus = "pending"
	OrderStatusProcessing OrderStatus = "processing"
	OrderStatusCompleted  OrderStatus = "completed"
	OrderStatusCancelled  OrderStatus = "cancelled"
)

type DeliveryType string

const (
	DeliveryTypePickup DeliveryType = "pickup"
	DeliveryTypeCourier DeliveryType = "courier"
)

type Order struct {
	ID            uint        `json:"id" gorm:"primaryKey"`
	UserID        uint        `json:"user_id" gorm:"not null"`
	Status        OrderStatus `json:"status" gorm:"not null"`
	TotalAmount   float64     `json:"total_amount" gorm:"not null"`
	DeliveryType  DeliveryType `json:"delivery_type" gorm:"not null"`
	Address       string      `json:"address"`
	Phone         string      `json:"phone" gorm:"not null"`
	Comment       string      `json:"comment"`
	CreatedAt     time.Time   `json:"created_at"`
	UpdatedAt     time.Time   `json:"updated_at"`
}

type OrderItem struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	OrderID   uint      `json:"order_id" gorm:"not null"`
	ProductID uint      `json:"product_id" gorm:"not null"`
	Quantity  int       `json:"quantity" gorm:"not null"`
	Price     float64   `json:"price" gorm:"not null"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
} 