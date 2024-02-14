
---

# Vite + Bootstrap Project

## Description

This project combines the modern build tool Vite with Bootstrap for styling. It's dockerized to streamline setup and ensure a consistent development environment, making it easy to get started without managing dependencies and configurations.

## Prerequisites

Before you begin, ensure you have Docker installed on your machine. Docker is used to containerize the application, ensuring a smooth and consistent environment for development and deployment.

- [Get Docker](https://docs.docker.com/get-docker/)

## Installation and Setup

To set up and run the project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Andebugulin/react-bootstrap.git
   cd react-bootstrap
   ```

2. **Build the Docker image**

   This step compiles your application into a Docker image, making it ready to run on any machine with Docker.

   ```bash
   docker build -t vite-app .
   ```

3. **Run the Docker container**

   Start a container from the image. This command runs the application and forwards the necessary port:

   ```bash
   docker run --network="host" -p 5173:5173 vite-app
   ```

After running these steps, the application should be accessible at `http://localhost:5173/`.

## Docker Management

### Stopping the Docker Container

To stop the running Docker container:

```bash
docker stop [CONTAINER_ID]
```

You can find the `CONTAINER_ID` by running `docker ps`, which lists all running containers. Look for the ID of the container running your Vite app.

### Removing the Docker Container

Once stopped, you can remove the container to clean up your system:

```bash
docker rm [CONTAINER_ID]
```

### Removing the Docker Image

If you wish to remove the Docker image you built for the project:

```bash
docker rmi vite-app
```

This command removes the image named `vite-app`, freeing up space on your machine. Ensure no containers are using the image before removing it.

### General Docker Management

- **View running containers**: `docker ps`
- **View all containers** (running and stopped): `docker ps -a`
- **View local Docker images**: `docker images`

## Usage

The application features simple routing and Bootstrap styling examples, that might be useful for demonstration purposes.

## Contributing

Contributions are welcome! Whether it's submitting bugs, requesting features, or contributing code, we value your input and contributions to the project.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

---

