# Create required IAM roles

## EC2InstanceRole  

>Permite que instâncias do EC2 em um cluster do ECS acessem o ECS.

> Usado principalmente pelo agente de contêiner em execução na(s) caixa(s) EC2

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

> Permite que o ECS crie e gerencie recursos da AWS em seu nome

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

>Permite que as tarefas do ECS chamem os serviços da AWS em seu nome.

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

> Permite que o Auto Scaling acesse e atualize os serviços do ECS

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
