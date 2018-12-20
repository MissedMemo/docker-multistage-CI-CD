# Multi-Stage Docker Example Projects

### A set of projects, progressing in complexity, exploring optimized Docker image construction & debugging, container management, AWS hosting of multiple containers via ECS, and a Jenkins CI/CD pipeline.

## Useful Docker Command Examples

* __Build a project:__ docker build -t missedmemo/simple .
* __List all local images:__ docker images
* __Remove multi-stage build artifacts:__ docker image prune -f
* __Start an image:__ docker run -d -p 3000:3000 --name bozo missedmemo/simple
<br>__(on port 3000, aliased as 'bozo')__
* __List all local containers:__ docker ps -a
* __CLI into running container:__ docker exec -it bozo sh
* __Stop the container:__ docker stop bozo
* __Remove the container:__ docker rm bozo
* __Remove the image:__ docker rmi missedmemo/simple

## Sample steps to Build & Run Elastic Beanstalk Demo

* cd 3-elastic-beanstalk
* docker build -t somenamespace/demo-ec2:1.0.0 .
* make sure you are logged into your Docker Hub account
* docker push somenamespace/demo-ec2:1.0.0
* update Dockerrun.aws.json to reference the namespace you specified
* set up Elastic Beanstalk environment via EBS Console or AWS CLI
<br> _create a new application, specifying a web server environment, and uploading Dockerrun.aws.json_

## Steps to Build & Run ECS Demo

* blah blah blah...

## Steps to Build & Run Sample Jenkins CI/CD Pipeline

* blah blah blah...