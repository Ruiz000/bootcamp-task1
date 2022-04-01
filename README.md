# Token Contracts

## Install
```
npm install
```

## Compile
```
npm compile
```

## Deploy
```
npx hardhat deploy --name ttt --symbol ttt --supply 1000000000000000000000000 --owner 0x319a0cfD7595b0085fF6003643C7eD685269F851 --network metermain
```

## setBlackList
```
npx hardhat setBlackList --account 0x319a0cfD7595b0085fF6003643C7eD685269F851 --network metermain
```

## getBlackList
```
npx hardhat getBlackList --account 0x319a0cfD7595b0085fF6003643C7eD685269F851 --network metermain
```

## mint
```
npx npx hardhat mint --to 0x319a0cfD7595b0085fF6003643C7eD685269F851 amount 10000000000000000000000 --network metermain
```

## pause
```
npx hardhat pause --network metermain
```

## unpause
```
npx hardhat unpause --network metermain
```

## grantRole
```
npx hardhat grant --account 0x319a0cfD7595b0085fF6003643C7eD685269F851 --network metermain
```

## revokeRole
```
npx hardhat revoke --account 0x319a0cfD7595b0085fF6003643C7eD685269F851 --network metermain
```

## Publish & Verify
```
npx hardhat veri --network metermain
```
