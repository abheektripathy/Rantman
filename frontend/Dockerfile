# Use an official Node.js runtime as a parent image
FROM node:16-alpine


WORKDIR /frontend

COPY . .
RUN npm install

# Build the Next.js application
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]