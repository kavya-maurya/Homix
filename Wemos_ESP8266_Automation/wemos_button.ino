#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecure.h>
const char* ssid = "Brownie";
const char* password = "blush*2590";
// Built-in LED on D4 (GPIO2)
#define LED_PIN D4
void setup() {
  Serial.begin(115200);
  // Set D4 as output
  pinMode(LED_PIN, OUTPUT);
  // Default OFF
  digitalWrite(LED_PIN, LOW);
  WiFi.begin(ssid, password);
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
}
void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClientSecure client;
    client.setInsecure();
    HTTPClient http;
    Serial.println("[HTTP] Connecting...");
    if (http.begin(client, "https://device-api-6.onrender.com/api/devices/6a032a9ac9906f7b425a5773")) {
      int httpCode = http.GET();
      if (httpCode > 0) {
        Serial.printf("HTTP Code: %d\n", httpCode);
        String payload = http.getString();
        Serial.println(payload);
        // Check status field
        if (payload.indexOf("\"status\":\"ON\"") > 0) {
          Serial.println("LED ON");
          digitalWrite(LED_PIN, LOW);
        } else {
          Serial.println("LED OFF");
          digitalWrite(LED_PIN, HIGH);
        }
      } else {
        Serial.printf("GET failed: %s (%d)\n",
                      http.errorToString(httpCode).c_str(),
                      httpCode);
      }
      http.end();
    } else {
      Serial.println("Unable to connect");
    }
  }
  delay(500);
}