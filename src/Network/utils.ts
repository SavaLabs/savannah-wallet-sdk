import { NetworkConfig } from '@/Network/types';
import { LocalnetConfig, MainnetConfig, TestnetConfig, SavannahConfig, MarulaConfig } from '@/Network/constants';
import { activeNetwork } from '@/Network/network';

export function isFujiNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === TestnetConfig.networkID;
}

export function isMainnetNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === MainnetConfig.networkID;
}

export function isMarulaNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === MarulaConfig.networkID;
}

export function isSavannahNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === SavannahConfig.networkID;
}

export function isLocalNetwork(activeNetwork: NetworkConfig) {
    return activeNetwork.networkID === LocalnetConfig.networkID;
}

export function getAvaxAssetID() {
    return activeNetwork.avaxID;
}

export function getActiveNetworkConfig() {
    return activeNetwork;
}
