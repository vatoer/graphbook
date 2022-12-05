# DOCKER

[tutorial-multi-container-app-mysql](https://learn.microsoft.com/en-us/visualstudio/docker/tutorials/tutorial-multi-container-app-mysql)

## create mysql container

- create docker compose file 

- Connect to mysql container

    ```sh
    docker exec -ti graphbook-mysql-1 mysql -p graphbook
    ```

    grant to devuser 

    ```sql
    GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'%' IDENTIFIED
    BY 'password';
    ```

- Note
    If you are already using MySQL8, the command that you need execute is a little
    different. Just run the following lines:
    ```
    CREATE USER 'devuser'@'%' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'%' WITH
    GRANT OPTION;
    FLUSH PRIVILEGES;
    ```
    The above commands will create a new user with the same permissions on your
    MySQL server.