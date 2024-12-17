# Backend Dockerfile for FastAPI

# Stage 1: Set up Python environment
FROM python:3.9-slim AS build

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .

# Create a virtual environment and install dependencies
RUN python3.9 -m venv /venv
RUN /venv/bin/pip install -r requirements.txt

# Copy the backend code into the container
COPY . .

# Set the environment variable to use the virtual environment
ENV PATH="/venv/bin:$PATH"

# Expose the port FastAPI is running on
EXPOSE 8000

# Run FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
