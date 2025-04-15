package services

import (
	"bytes"
	"encoding/json"
	"net/http"
	"pils_app/config"
)

type SMSService struct {
	config *config.Config
}

func NewSMSService(cfg *config.Config) *SMSService {
	return &SMSService{
		config: cfg,
	}
}

type SMSRequest struct {
	Phone string `json:"phone"`
	Text  string `json:"text"`
}

type SMSResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func (s *SMSService) SendOTP(phone, code string) error {
	text := "Ваш код подтверждения: " + code
	
	reqBody := SMSRequest{
		Phone: phone,
		Text:  text,
	}

	jsonData, err := json.Marshal(reqBody)
	if err != nil {
		return err
	}

	req, err := http.NewRequest("POST", s.config.SMSConfig.APIURL, bytes.NewBuffer(jsonData))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+s.config.SMSConfig.APIKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	var smsResp SMSResponse
	if err := json.NewDecoder(resp.Body).Decode(&smsResp); err != nil {
		return err
	}

	if smsResp.Status != "success" {
		return err
	}

	return nil
} 