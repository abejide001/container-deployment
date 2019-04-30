#!/usr/bin/env bash

# to ensure the script terminate immediately it encounters an error
set -e pipefail

# load the variables declared in the .env file into the shell
source .env
source ./deployment-scripts/gke.sh

function create_db_deployment() {
    cd kubernetes-deployments
    kubectl create -f ./volume.yml
    kubectl create -f ./volume_claim.yml
    kubectl create -f ./database.yml
    kubectl expose deployment merry-postgres --type=NodePort --port=5000 --target-port=5432

    sleep 45s
    db_ip_address=$(kubectl get service merry-postgres | grep -E -o "([0-9]{1,3}[\.]){3}[0-9]{1,3}")
    kubectl create configmap merry-config-map --from-literal=db_host_ip="$db_ip_address"

    # sed -ie '/database_url:/d' ./secrets.yml
    # echo "  database_url: $db_conn_url_hash" >> ./secrets.yml
    # kubectl apply -f ./secrets.yml
}

# the script starting point
function main() {
    setup_GKE_GCP
    create_db_deployment
}
main
