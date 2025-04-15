package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	Port     int
	DBConfig DBConfig
	JWTConfig JWTConfig
	SMSConfig SMSConfig
	PaymentConfig PaymentConfig
}

type DBConfig struct {
	Host     string
	Port     int
	User     string
	Password string
	DBName   string
}

type JWTConfig struct {
	Secret     string
	Expiration string
}

type SMSConfig struct {
	APIKey string
	APIURL string
}

type PaymentConfig struct {
	Click ClickConfig
	Payme PaymeConfig
}

type ClickConfig struct {
	MerchantID string
	ServiceID  string
	SecretKey  string
}

type PaymeConfig struct {
	MerchantID string
	SecretKey  string
}

func LoadConfig() *Config {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	port, _ := strconv.Atoi(getEnv("PORT", "8080"))
	dbPort, _ := strconv.Atoi(getEnv("DB_PORT", "5432"))

	return &Config{
		Port: port,
		DBConfig: DBConfig{
			Host:     getEnv("DB_HOST", "localhost"),
			Port:     dbPort,
			User:     getEnv("DB_USER", "postgres"),
			Password: getEnv("DB_PASSWORD", "postgres"),
			DBName:   getEnv("DB_NAME", "pils_app"),
		},
		JWTConfig: JWTConfig{
			Secret:     getEnv("JWT_SECRET", "your-secret-key"),
			Expiration: getEnv("JWT_EXPIRATION", "24h"),
		},
		SMSConfig: SMSConfig{
			APIKey: getEnv("SMS_API_KEY", ""),
			APIURL: getEnv("SMS_API_URL", ""),
		},
		PaymentConfig: PaymentConfig{
			Click: ClickConfig{
				MerchantID: getEnv("CLICK_MERCHANT_ID", ""),
				ServiceID:  getEnv("CLICK_SERVICE_ID", ""),
				SecretKey:  getEnv("CLICK_SECRET_KEY", ""),
			},
			Payme: PaymeConfig{
				MerchantID: getEnv("PAYME_MERCHANT_ID", ""),
				SecretKey:  getEnv("PAYME_SECRET_KEY", ""),
			},
		},
	}
}

func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
} 