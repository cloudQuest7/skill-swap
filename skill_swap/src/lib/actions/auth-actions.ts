"use server";

export interface AuthResponse {
  errorMessage?: string;
  success?: boolean;
}

export async function loginAction(email: string, password: string): Promise<AuthResponse> {
  try {
    // Basic validation
    if (!email || !password) {
      return { errorMessage: "Email and password are required" };
    }

    console.log('Login attempt:', { email });

    // In a real app, you would validate against your backend
    // This is just a mock implementation
    if (email.toLowerCase() === "test@example.com" && password === "password123") {
      console.log('Login successful');
      return { success: true };
    }

    console.log('Login failed: Invalid credentials');
    return { errorMessage: "Invalid email or password. Use test@example.com/password123 for testing." };
  } catch (error) {
    console.error("Login error:", error);
    return { errorMessage: "An unexpected error occurred" };
  }
}

export async function signUpAction(email: string, password: string): Promise<AuthResponse> {
  try {
    // Basic validation
    if (!email || !password) {
      return { errorMessage: "Email and password are required" };
    }

    if (password.length < 8) {
      return { errorMessage: "Password must be at least 8 characters long" };
    }

    // In a real app, you would create the user in your backend
    // This is just a mock implementation
    if (email === "test@example.com") {
      return { errorMessage: "Email already exists" };
    }

    return { success: true };
  } catch (error) {
    console.error("Sign up error:", error);
    return { errorMessage: "An unexpected error occurred" };
  }
}

export async function updateProfileAction(profile: any): Promise<UpdateProfileResponse> {
  try {
    const res = await fetch('/api/users/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
      credentials: 'include',
    });
    if (!res.ok) {
      const data = await res.json();
      return { errorMessage: data.message || 'Failed to update profile' };
    }
    return { success: true };
  } catch (error) {
    return { errorMessage: 'An unexpected error occurred' };
  }
}
