package models

import (
	"time"
)

type PaymentStatus string

const (
	PaymentStatusPending   PaymentStatus = "pending"
	PaymentStatusPaid      PaymentStatus = "paid"
	PaymentStatusFailed    PaymentStatus = "failed"
	PaymentStatusCancelled PaymentStatus = "cancelled"
)

type PaymentMethod string

const (
	PaymentMethodClick PaymentMethod = "click"
	PaymentMethodPayme PaymentMethod = "payme"
)

type Payment struct {
	ID            uint          `json:"id" gorm:"primaryKey"`
	OrderID       uint          `json:"order_id" gorm:"not null"`
	Amount        float64       `json:"amount" gorm:"not null"`
	Status        PaymentStatus `json:"status" gorm:"not null"`
	Method        PaymentMethod `json:"method" gorm:"not null"`
	TransactionID string        `json:"transaction_id"`
	CreatedAt     time.Time     `json:"created_at"`
	UpdatedAt     time.Time     `json:"updated_at"`
} 