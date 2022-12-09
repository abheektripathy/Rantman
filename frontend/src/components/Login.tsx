
import { useState, useEffect } from "react";
import { Divider, Button, PasswordInput, Group, TextInput, Text, Image, ActionIcon } from "@mantine/core";
import { Center } from "@chakra-ui/react";




export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const link = () => {
    window.location.href = "/note";

  }




  return (
    
    <div className="notes">
    <div className="notes-header">
           <h2 className="notes-title">&#9782; LOGIN</h2>
    
    <form onSubmit={link}>
       
      <fieldset className="text-dark">
       
        
        <div className="mb-3">
          <TextInput
            
            placeholder="example@gmail.com"
            label="Email"
            color="white"
            withAsterisk
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <PasswordInput
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            label="Password"
            required
          />
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <br></br>
        <br></br>

<div className="row" >
          <div className="col d-flex justify-content-center">
            <a href="/note" role="button">
              <Button color="orange.4" variant="outline" >
                <Text>Login</Text>
              </Button>
            </a>
          </div>
        </div>
      </fieldset>
     
    </form>

    </div>
      </div>
  );
}