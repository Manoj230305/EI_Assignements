# Astronaut Scheduler Application

This project is a full-stack application consisting of:
- **Frontend:** Developed using React (Next.js)
- **Backend:** Developed using Java Spring Boot, exposed via REST APIs
- **Console-based Java Program:** A simple Java implementation for console output, located in the `java_consolebased` folder

---

## Project Structure

```
Assignment_2/
│
├── backend/
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/com/example/scheduler/
│           │    ├── AstronautSchedulerApplication.java
│           │    ├── controller/TaskController.java
│           │    ├── model/Task.java
│           │    ├── dto/TaskRequest.java
│           │    ├── service/
│           │    │     ├── ScheduleManager.java
│           │    │     └── TaskFactory.java
│           │    └── observer/
│           │          ├── Observer.java
│           │          └── ConflictNotifier.java
│           └── resources/
│                └── application.properties
│
├── java_consolebased/
│   └── (Java files for console-based implementation)
│
├── app/ (or frontend/)
│   └── (React/Next.js frontend code)
│
└── README.md
```

---

## Cloning the Repository

```bash
git clone <repository-url>
cd Assignment_2
```

---

## Running the Application

### 1. Backend (Spring Boot)

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Build and run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```
   The backend server will start (default on port 8080). It exposes REST APIs for the frontend to consume.

### 2. Frontend (React/Next.js)

1. Navigate to the frontend folder (commonly `app` or `frontend`):
    ```bash
    cd ../app
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### 3. Console-based Java Program

1. Navigate to the `java_consolebased` folder:
    ```bash
    cd ../java_consolebased
    ```
2. Compile and run the Java program:
    ```bash
    javac Main.java
    java Main
    ```
   This will execute the simple console-based version of the scheduler.

---

## Program Flow

### Frontend (React/Next.js)
- Provides a user interface for managing astronaut tasks.
- Communicates with the backend via REST APIs to fetch, create, and update tasks.

### Backend (Spring Boot)
- Handles business logic, data validation, and persistence.
- Implements observer pattern for conflict notifications.
- Exposes endpoints for task management.

### Console-based Java Program
- Demonstrates the core scheduling logic in a simple, interactive console application.
- Useful for testing and understanding the scheduling flow without the web interface.

---

## Additional Notes

- Ensure Java and Maven are installed for backend and console-based programs.
- Node.js and npm are required for the frontend.
- Update API URLs in the frontend if the backend runs on a different host/port.

---

Feel free to explore each folder for more details on the implementation!
