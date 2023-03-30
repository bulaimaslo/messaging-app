# Messaging app - backend focused

I wanted to put into practice things learned from the [backend course](https://www.udemy.com/course/fundamentals-of-backend-communications-and-protocols/) 
to expand my knowledge of backend engineering and I came up with the idea for a messaging web app. 
My goal is to develop a minimum viable product asap and ship it as possible and then gradually expand the app by adding end-to-end encryption, enchancing frontend, dockerizing it.

<br/>

## Design choices
#### Technologies: 
- Node.js, Express.js - because of popularity and previous experience. I like it’s modular architecture and HTTP utility methods
- Typescript - since I prefer strongly typed languages
- MongoDB- it offers more flexibility and scalability needed for such an application. Also I wanted to get more experience with noSQL database


#### API authentication mechanism:
I chose combination of API keys and JSON Web Tokens (JWT). API keys would be used to authenticate users and provide access to the API, while JWTs would be used to verify the authenticity of API requests over OAuth 2.0 because it seemed like overkill with third-party services integration

#### Database design:
for MVP there will be just two collections, for users and messages

 SSL or TLS?
