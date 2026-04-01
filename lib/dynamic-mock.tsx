"use client"

import React from "react"

const MOCK_WALLET_ADDRESS = "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18"

const mockWallet = {
  address: MOCK_WALLET_ADDRESS,
  chain: "eip155:11155111",
  connector: { name: "mock" },
  getPublicClient: async () => ({
    readContract: async () => BigInt(0),
    getBalance: async () => BigInt(0),
    getTransactionReceipt: async () => ({ status: "success" }),
  }),
  getWalletClient: async () => ({
    writeContract: async () => "0xmocktxhash",
  }),
}

const mockUser = {
  email: "demo@decentralai.xyz",
  alias: "Demo User",
  userId: "demo-user-001",
}

export function DynamicContextProvider({ children }: { children: React.ReactNode; settings?: any }) {
  return <>{children}</>
}

export function useDynamicContext() {
  return {
    user: mockUser,
    primaryWallet: mockWallet,
    handleLogOut: () => {
      window.location.href = "/"
    },
    setShowAuthFlow: () => {},
    showAuthFlow: false,
    isAuthenticated: true,
    authToken: "demo-mock-token",
  }
}

export function useUserWallets() {
  return [mockWallet]
}

export function DynamicWidget() {
  return (
    <div style={{ padding: "20px", textAlign: "center", border: "1px solid #e5e7eb", borderRadius: "12px" }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Demo Mode Active</p>
      <p style={{ fontSize: "14px", color: "#6b7280" }}>
        Logged in as {mockUser.email}
      </p>
      <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
        Wallet: {MOCK_WALLET_ADDRESS.slice(0, 6)}...{MOCK_WALLET_ADDRESS.slice(-4)}
      </p>
    </div>
  )
}

export const EthereumWalletConnectors = []

export function isEthereumWallet(_wallet: any): boolean {
  return true
}
