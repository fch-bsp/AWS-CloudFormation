

#!/bin/bash
sudo su
curl https://releases.rancher.com/install-docker/20.10.sh | sh
usermod -aG docker ubuntu