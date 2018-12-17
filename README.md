# Multi-Stage Docker Example Projects

### A set of projects, progressing in complexity, exploring optimized Docker image construction & debugging, container management, AWS hosting via ECS, and CI/CD.

## Useful Docker Command Examples

* docker build -t missedmemo/simple .
* docker images
* docker prune -f
* docker run -d -p 3000:3000 --name bozo missedmemo/simple
* docker ps -a
* docker exec -it bozo sh
* docker stop bozo
* docker rm bozo
* docker rmi missedmemo/simple