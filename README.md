# Using Containers for Deployment

## Introduction
A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings

## Technologies Used
- [Docker](docker.com) - Docker is a computer program that performs operating-system-level virtualization
- [Kubernetes](https://kubernetes.io/) - Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications
![Chart_02_Kubernetes-Architecture](https://user-images.githubusercontent.com/6943256/56995631-3338b200-6b9a-11e9-94db-4b37427321e8.png)
- [Google Cloud Platform](cloud.google.com)

## How the application works
The Dockerfiles directory contains the dockerfile for the frontend and backend service.
- The backend dockerfile
 <img width="668" alt="Screenshot 2019-04-30 at 11 04 17 PM" src="https://user-images.githubusercontent.com/6943256/56996468-8a3f8680-6b9c-11e9-9850-c97599d15ef4.png">
 The commands are being executed in sequece when the dockerfile is ran, the file can be rexecuted with the command `docker build -t backend.dockerfile .`
 
 - The frontend dockerfile
 <img width="855" alt="Screenshot 2019-04-30 at 11 11 34 PM" src="https://user-images.githubusercontent.com/6943256/56996713-557fff00-6b9d-11e9-9215-14eb1438cf63.png">
 The frontend image is built from a `node:10.15.3-alpine` image, the commands are being executed in sequence, the frontend can be executed with the command `docker build -t frontend.dockerfile .`
 
 The Kubernetes deployments directory contains the deployments configurations for the database, backend and frontend of the application
 - The frontend kubernetes deployment script
 <img width="828" alt="Screenshot 2019-04-30 at 11 18 05 PM" src="https://user-images.githubusercontent.com/6943256/56997001-3c2b8280-6b9e-11e9-8133-d3cad3dd2343.png">
 Kubernetes deployment api object was being to used to deploy the frontend docker image built as a running container in the pod inside the cluster, 3 **replicas** were created, so there will be 3 running pods, this is because if one fails another pod is going to start running, to acheive high availability.
 
 - The backend kubernetes deployment script
 <img width="804" alt="Screenshot 2019-05-01 at 12 03 25 AM" src="https://user-images.githubusercontent.com/6943256/56998804-90d1fc00-6ba4-11e9-813e-87eb2a1b1c73.png">
 The backend runs the backend image built in a running container, the backend uses the database in the container, the backend as 3 **replicas**
 
 - The database kubernetes deployment script
 <img width="837" alt="Screenshot 2019-05-01 at 12 11 28 AM" src="https://user-images.githubusercontent.com/6943256/56999097-b4e20d00-6ba5-11e9-96c1-d191ebf45cf9.png">
Volume were being used to persist the database data, there are 2 **replicas** for the database.

## How to run the application
- Create a `.env` file
- Copy the content of the `.env.sample` and paste into the `.env` file
- Run the database deployment script with the command
``` bash
$ ./database.sh
```
- Run the backend deployment script with the command
``` bash
$ ./backend.sh
```
- Run the frontend deployment script with the command
``` bash
$ ./frontend.sh
```

## Acknowledgement
- Timileyin Farayola
 
 
