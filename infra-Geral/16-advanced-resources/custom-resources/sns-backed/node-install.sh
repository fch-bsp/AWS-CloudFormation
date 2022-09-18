#!/bin/bash
# Install NodeJS
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs

# Install Our Application
mkdir /home/ec2-user/webserver && cd /home/ec2-user/webserver 
npm init -y
npm install express body-parser chalk cfn-response
chown -R ec2-user:ec2-user /home/ec2-user/*
