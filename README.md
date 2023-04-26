# Rantman

An over-engineered notes app, with a scalable infra.
</br>
</br>
<img width="1209" alt="Screenshot 2023-04-26 at 12 13 05 AM" src="https://user-images.githubusercontent.com/90976669/234372290-68f3da46-abbe-4611-9e40-311069a9c08b.png">



### Architecture Overview

Rantman consists of several components bundled together with docker-compose. The frontend is built with Next.js and sends HTTP requests to the Nginx load balancer. The load balancer is configured to use the least_conn algorithm to route requests to one of the three backend replicas of the Django application.

The Django application is served through Gunicorn, which handles memory balancing through its workers for better thread management. The backend communicates with a Postgres database to store and retrieve data.

All the components of the app are containerized and orchestrated through Docker Compose, which enables easy management and deployment of the app. The app uses a custom load balancer configuration through Nginx to handle incoming requests and distribute the load evenly among the backend replicas.

The use of containerization technology allows for better scalability and portability of the app. The app can be easily deployed to different environments, and the infrastructure can be easily replicated and scaled up or down as needed.

Overall, the app architecture is designed to provide high availability, scalability, and fault tolerance, ensuring that the app can handle a high volume of requests without downtime or performance issues.

</br>
</br>

<img width="742" alt="Screenshot 2023-04-26 at 1 07 17 PM" src="https://user-images.githubusercontent.com/90976669/234503772-01a5a5dd-f208-4082-978a-237fd940a8dd.png">

</br>


### Installation and Deployment

To install and deploy Rantman, you will need to follow these steps:


1. Clone the Rantman repository from GitHub:

```
git clone <https://github.com/your-username/rantman.git>
```

1. Install Docker and Docker Compose on your machine, if they are not already installed.
2. Build the Docker images for the app by running the following command:

```
docker-compose build
```

1. Start the app using Docker Compose:

```
docker-compose up
```

This will start the app in development mode.

p.s the vercel deployment currently just shows the start page, just for the sake of a college project, this was meant to be run locally.




