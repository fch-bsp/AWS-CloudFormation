# Create core AWS infrastructure
# https://www.site24x7.com/pt/tools/ipv4-sub-rede-calculadora.html

* VPC- Classe A (192.168.0.0/16)
* 2 subnets Public 2 Private-Classe A 
* total de 16384 pra cada subnet (192.168.0.0/18-192.168.64.0/18-192.168.128.0/18-192.168.192.0/18)
* Internet gateways
* Route tables
* NAT gateways


Commando:  


``bash

aws cloudformation create-stack \
--region us-east-2 \
--stack-name vpc-eks-stack \
--template-body file://./criacao-vpc-eks.yml


```



# criação de 1 VPC para estrutura de EKS via arquivo de manifesto AWS OBS; Apenas na região us-west-2

Commando:  

```bash

aws cloudformation create-stack \
--region us-east-2 \
--stack-name my-eks-vpc-stack \
--template-url https://s3.us-west-2.amazonaws.com/amazon-eks/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml



```


# Criar IAM-ROLE CLUSTER 

Commando:  

aws iam create-role \
--region us-east-2 \
--role-name EKSClusterPolicy \
--assume-role-policy-document file://./create-_IAM_roles.yml


# Acessar kubconfig 


aws eks update-kubeconfig \
--region us-east-2 \
--name my-cluster


# criação de uma chave SSH 

aws ec2 create-key-pair \
--region us-east-2 \
--key-name mykeypair

