"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Eye, EyeOff, UserPlus } from "lucide-react"

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("")
    setSuccess("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required.")
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }
    setLoading(true)
    // Simulate registration
    setTimeout(() => {
      setLoading(false)
      setSuccess("Registration successful! You can now log in.")
      setForm({ name: "", email: "", password: "", confirmPassword: "" })
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-4">
      <Card className="w-full max-w-md p-8 shadow-2xl border-emerald-200 bg-white/90">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-blue-800 mb-1">Create Account</h2>
          <p className="text-blue-700 text-sm">Sign up to access your dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-blue-800 font-medium mb-1">Full Name</label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="h-12 text-base"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-blue-800 font-medium mb-1">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="h-12 text-base"
              autoComplete="email"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-blue-800 font-medium mb-1">Password</label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="h-12 text-base pr-10"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-blue-600 hover:text-blue-800"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-blue-800 font-medium mb-1">Confirm Password</label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              className="h-12 text-base pr-10"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-blue-600 hover:text-blue-800"
              tabIndex={-1}
              onClick={() => setShowConfirm((v) => !v)}
            >
              {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {error && <div className="text-red-600 text-sm font-medium text-center">{error}</div>}
          {success && <div className="text-green-700 text-sm font-medium text-center">{success}</div>}
          <Button
            type="submit"
            className="w-full h-12 text-base bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 font-semibold shadow-md"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-blue-700">
          Already have an account? <a href="/login" className="text-blue-900 font-semibold hover:underline">Log in</a>
        </div>
      </Card>
    </div>
  )
}
