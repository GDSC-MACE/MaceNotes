import React, {useState} from 'react'
import "./Init.css"
import {Form, Header, Grid, Select, Button, Card, Icon} from "semantic-ui-react"

const Init = () => {
    const[next, setNext]= useState(false)
    return (
        <div 
            style={{backgroundColor:"black"}}
        >
        <Grid >
            <Grid.Row>
                <Grid.Column style={{marginLeft:"6rem", marginTop:"6rem"}}>
                    <Header as="h1" style={{fontFamily:"Sans-serif", color:"#547CF5"}}>UPLOAD NOTES</Header>
                </Grid.Column>
            </Grid.Row>
            {!next &&
            <Grid.Row>
                <Grid.Column style={{marginLeft:"6rem"}}>   
                    <Form>
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem"}}>Name *</div>
                        <Form.Input
                            width="4"
                            required
                            placeholder='Enter your name'
                        />
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem"}}>Email ID *</div>
                        <Form.Input 
                            width="4"
                            required
                            placeholder='Enter your email ID'
                        />
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem"}}>WhatsApp Number  *</div>
                        <Form.Input 
                            width="4"
                            required
                            placeholder='Enter your number'
                        />
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem"}}>Semester *</div>
                        <Select 
                            required 
                            placeholder='Choose your semester'
                            // options={countryOptions} 
                        />
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem"}}>Branch *</div>
                        <Select 
                            required 
                            placeholder='Choose your branch'
                            // options={countryOptions} 
                        />
                        <div></div>
                        <Button style={{marginTop:"5rem", borderRadius:"30px", paddingLeft:"2rem", paddingRight:"2rem" }} onClick={()=>setNext(true)}>
                            NEXT
                        </Button>

                    </Form>
                </Grid.Column>
            </Grid.Row>}
            {next &&
            <Grid.Row>
                <Grid.Column style={{marginLeft:"6rem"}}>   
                    <Form>
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem"}}>Subject *</div>
                        <Select 
                            required 
                            placeholder='Choose the subject'
                            // options={countryOptions} 
                        />
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem" }}>Module *</div>
                        <Select 
                            required 
                            placeholder='Choose the Module'
                            // options={countryOptions} 
                        />
                        <div style={{fontFamily:"Sans-serif", color:"white", marginBottom:"0.6rem", marginTop:"4rem"}}>File Upload *</div>
                        
                        <Card style={{border: "2px dashed #547CF5", background:"black"}}>
                            <Icon color="grey" name='file alternate outline' size='huge' style={{marginLeft:"8rem", marginTop:"4rem"}}/>
                            <div style={{fontFamily:"Sans-serif", color:"grey", marginBottom:"4rem", fontSize:"0.8rem", marginLeft:"4rem", marginTop:"1rem"}}> Browse your computer or drag a file</div>
                        </Card>
                        <div></div>
                        <Button style={{marginTop:"5rem", borderRadius:"30px", paddingLeft:"2rem", paddingRight:"2rem", background:"#547CF5", fontWeight:"bold"}}>
                            Submit
                        </Button>

                    </Form>
                </Grid.Column>
            </Grid.Row>}
        </Grid>
        </div>
    )
}

export default Init

