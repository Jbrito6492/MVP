package structs

import "go.mongodb.org/mongo-driver/bson/primitive"

// User structure representing new users
type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Username string             `bson:"username,omitempty"`
	Email    string             `bson:"email,omitempty"`
	Password string             `bson:"password,omitempty"`
	Location struct {
		longitude float64
		latitude  float64
	} `bson:"location,omitempty"`
	Hashtag string `bson:"hashtag,omitempty"`
}
