### Steps to Launch and Monitor with Loki and Grafana

1. **Launch the Express Server**
   Start your Express server on the local machine.
   Verify it's running by accessing:
   ```bash
   curl http://localhost:5001/
   ```

2. **Navigate to the Loki Setup Directory**
   Change to the directory containing the Loki configuration:
   ```bash
   cd ./loki
   ```

3. **Start Loki and Grafana with Docker Compose**
   Launch Loki and Grafana using Docker Compose:
   ```bash
   docker compose -f docker-compose.yaml up
   ```

4. **Access Grafana**
   Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)
   Use the following credentials to log in:
   - **Username**: admin
   - **Password**: admin

5. **Configure Loki as a Data Source**
   - In Grafana, go to **Configuration > Data Sources**.
   - Add a new data source for Loki with the URL:
     ```text
     http://loki:3100
     ```

6. **Explore and Visualize Logs**
   - Navigate to the **Explore** section in Grafana.
   - Create a chart of the HTTP requests logged by your Express server.

7. **Add Filters to Visualize Errors**
   - Add error filters to identify and visualize specific error patterns in your logs.
   - Update the chart to include these filters for better analysis.

8. **Generate More Data**
   - Execute additional requests to your Express server to generate more logs:
     ```bash
     curl http://localhost:5001/*
     ```

9. **Monitor Logs in Real-Time**
   - Return to Grafana to see the real-time log data and charts updating dynamically.

10. **Enjoy!**
    Use the dashboards and log analytics to monitor and gain insights into your application.

