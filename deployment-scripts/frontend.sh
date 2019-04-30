#!/usr/bin/env bash

# to ensure the script terminate immediately it encounters an error
set -e pipefail

function create_frontend_deployment () {
    cd kubernetes-deployments
    kubectl create -f ./frontend-deployment.yml
    kubectl expose deployment merry-frontend --type "LoadBalancer" --port 80 --target-port=80
}

# the script starting point
function main () {
    create_frontend_deployment
}
main