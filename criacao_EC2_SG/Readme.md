# Create EC2 com SG


* Security Group
* Instancia EC2
* Elastic IP

Commando:  



# Acessar kubconfig 



aws eks update-kubeconfig \
--region us-east-2 \
--name <nome do cluster>


# criação de uma chave SSH 

aws ec2 create-key-pair \
--region us-east-2 \
--key-name <nome chave>


aws ec2 run-instances --region us-east-2 --image-id <ami:xxxxxxx> --count 1 --instance-type t3.medium --key-name <xxx> --security-group-ids sg-<xxxxxx> --subnet-id subnet-<xxxxxxx> --user-data file://docker.sh --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=Server-Fernando}]' 'ResourceType=volume,Tags=[{Key=Name,Server-Fernando}]'