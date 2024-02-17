# Step 1: Use an official Node.js runtime as a parent image
FROM node:20

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the current directory contents into the container at /usr/src/app
COPY . .

# Step 4: Install any needed packages specified in package.json
RUN npm install

# Step 5: Make port 5173 available to the world outside this container
EXPOSE 5173

CMD ["npm", "run", "dev"]

