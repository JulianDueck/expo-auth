const API_KEY = process.env.EXPO_PUBLIC_API_KEY

async function authenticate(mode: string, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecruelyToken: true
    })
  }).then(res => res.json());
  return response;
}

export function createUser(email: string, password: string) {
  return authenticate('signUp', email, password)
}

export function loginUser(email: string, password: string) {
  return authenticate('signInWithPassword', email, password)
}