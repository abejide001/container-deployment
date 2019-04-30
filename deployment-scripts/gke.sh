function configure_GCP_project() {
    gcloud config set project $PROJECT_NAME
    gcloud config set compute/zone $COMPUTE_ZONE
}

function create_GKE_cluster () {
    gcloud container clusters create $CLUSTER_NAME  --num-nodes=$NUM_OF_NODES --zone $COMPUTE_ZONE --machine-type $MACHINE_TYPE
    gcloud container clusters get-credentials $CLUSTER_NAME
}

function create_GCP_disk () {
    gcloud compute disks create merry-pg-data-disk --size $DISK_CAPACITY --zone $REGION
}

function setup_GKE_GCP () {
    configure_GCP_project
    create_GKE_cluster
    create_GCP_disk
}