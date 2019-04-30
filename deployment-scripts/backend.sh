#!/usr/bin/env bash

# to ensure the script terminate immediately it encounters an error
set -e pipefail

function create_backend_deployment () {
    cd kubernets-deployments
    display_message $BLUE "CREATING BACKEND DEPLOYMENT"
    kubectl create -f ./backend_deployment.yml
    kubectl expose deployment merry-backend --type=LoadBalancer --port=80 --target-port=9000
}

# the script starting point
function main () {
    create_backend_deployment
}
main