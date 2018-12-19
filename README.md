# Multi-Stage Docker Example Projects

### A set of projects, progressing in complexity, exploring optimized Docker image construction & debugging, container management, AWS hosting via ECS, and CI/CD.

## Useful Docker Command Examples

* docker build -t missedmemo/simple .
* docker images
* docker image prune -f
* docker run -d -p 3000:3000 --name bozo missedmemo/simple
* docker ps -a
* docker exec -it bozo sh
* docker stop bozo
* docker rm bozo
* docker rmi missedmemo/simple

## Steps to Run Elastic Beanstalk Example

* docker build -t yournamespace/demo-ec2:1.0.0 .
* make sure you are logged into your Docker Hub account
* docker push yournamespace/demo-ec2:1.0.0
* update Dockerrun.aws.json to reference your namespace
* set up Elastic Beanstalk environment via EBS Console or AWS CLI
<br> _create a new application and (web server) environment, uploading Dockerrun.aws.json_

