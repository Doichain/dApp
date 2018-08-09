node {


   docker.withRegistry('https://registry.hub.docker.com', 'Docker-Hub-Credentials') {
        image = docker.image('doichain/node-only')
        image.pull()
   }

/*
  def runCmd = { cmd,port, rpc_port ->
        docker.image("doichain/node-only").withRun("--rm --hostname=${cmd} -e REGTEST=true -e RPC_ALLOW_IP=::/0 -p ${port}:18445 -p ${rpc_port}:18443 -e RPC_USER=admin -e RPC_PASSWORD=generated-password -e RPC_HOST=localhost") {
           echo "running inside doichain docker image ${cmd} ${port} ${rpc_port}"
        }
    }
*/
 stage 'Build'
  parallel (
    "alice": {
     // runCmd ("alice", 18445,18443)
     docker.image("doichain/node-only").withRun("-u root:root --rm --hostname=alice -e REGTEST=true -e RPC_ALLOW_IP=::/0 -p 18445:18445 -p 18443:18443 -e RPC_USER=admin -e RPC_PASSWORD=generated-password -e RPC_HOST=localhost") { c ->
                //sh 'while ! mysqladmin ping -h0.0.0.0 --silent; do sleep 1; done'
                echo "running with doichain docker image alice"
                sh 'sleep 30'
     }

    },
  /*  "bob": {
           docker.image("doichain/node-only").withRun("--rm --hostname=bob -e REGTEST=true -e RPC_ALLOW_IP=::/0 -p 18446:18445 -p 18444:18443 -e RPC_USER=admin -e RPC_PASSWORD=generated-password -e RPC_HOST=localhost") { c ->
                  echo "running with doichain docker image bob"
                 sh 'sleep 30'

            }
    }, */
    "ubuntu": {
             docker.image("ubuntu").withRun("-u root:root"){ c ->
                 echo "running with doichain docker image ubuntu"
                 sh 'sleep 30'
             }
    }
  )

}