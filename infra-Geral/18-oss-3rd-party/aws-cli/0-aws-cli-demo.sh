#!/usr/bin/env bash

# see http://docs.aws.amazon.com/cli/latest/userguide/installing.html
# AWS CLI installation depends on OS

# we create the cloudformation template
aws cloudformation create-stack --stack-name example-cli-stack --template-body file://0-sample-template.yaml --parameters file://0-parameters.json

# some options:
# [--template-url <value>]
# [--disable-rollback | --no-disable-rollback]
# [--rollback-configuration <value>]
# [--timeout-in-minutes <value>]
# [--notification-arns <value>]
# [--capabilities <value>]
# [--resource-types <value>]
# [--role-arn <value>]
# [--on-failure <value>]
# [--stack-policy-body <value>]
# [--stack-policy-url <value>]
# [--tags <value>]
# [--client-request-token <value>]
# [--enable-termination-protection | --no-enable-termination-protection]
# [--cli-input-json | --cli-input-yaml]
# [--generate-cli-skeleton <value>]

aws cloudformation delete-stack --stack-name example-cli-stack