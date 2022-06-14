# Create required IAM roles

## EC2InstanceRole  

> Allows EC2 instances in an ECS cluster to access ECS.
> Used primarily by the container agent running on the EC2 box(es)

- open AWS mgm console
- go to service IAM
- click on _Roles_ in left navigation bar
- click "_create Role_"
- click on service "_Elastic Container Service_"
- scroll down a bit to section "_Select your use case_"
- click "_EC2 Role for Elastic Container Service_"
- click "_next Permissions_" , "_next Tags_", "_next Review"_
- provide "_ecsInstanceRole_" as Role name
- click on "_create_"

## ECSRole  

> Allows ECS to create and manage AWS resources on your behalf

- open AWS mgm console
- go to service IAM
- click on _Roles_ in left navigation bar
- click "_create Role_"
- click on service "_Elastic Container Service_"
- scroll down a bit to section "_Select your use case_"
- click "_EC2 Role for Elastic Container Service_"
- click "_next Permissions_" , "_next Tags_", "_next Review"_
- provide "_ecsRole_" as Role name
- click on "_create_"

## ECSTaskExecutionRole

> Allows ECS tasks to call AWS services on your behalf.

- open AWS mgm console
- go to service IAM
- click on _Roles_ in left navigation bar
- click "_create Role_"
- click on service "_Elastic Container Service_"
- scroll down a bit to section "_Select your use case_"
- click "_EC2 Role for Elastic Container Service_"
- click "_next Permissions_" , "_next Tags_", "_next Review"_
- provide "_ecsTaskExecutionRole_" as Role name
- click on "_create_"

## ECSAutoscalingRole

> Allows Auto Scaling to access and update ECS services

- open AWS mgm console
- go to service IAM
- click on _Roles_ in left navigation bar
- click "_create Role_"
- click on service "_Elastic Container Service_"
- scroll down a bit to section "_Select your use case_"
- click "_EC2 Role for Elastic Container Service_"
- click "_next Permissions_" , "_next Tags_", "_next Review"_
- provide "_ecsAutoscalingRole_" as Role name
- click on "_create_"
