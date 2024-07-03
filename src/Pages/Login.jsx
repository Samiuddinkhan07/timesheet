import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Button,
    Checkbox,
    Anchor,
    Title,
} from '@mantine/core';
import classes from './login.module.css'


function AuthenticationForm() {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },

    });

    const handleLogin =  (data) =>{
        console.log("Im in Login")
    }

    const handleRegister = async (data) =>{
        console.log("Im in Register")
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Minutes Matter!
                </Title>
                <form onSubmit={form.onSubmit((values) =>{
                    {type === "register" ? handleRegister(values) : handleLogin(values)}
                })}>
                    {type === "register" && (
                        <TextInput
                            label="Username"
                            placeholder="jhonedoe"
                            size="md"
                            required
                            onChange={(event) =>{form.setFieldValue('name',event.target.value)}}
                            error={form.errors.email && 'Username already in use'}
                        />
                    )}
                <TextInput
                    label="Email address"
                    placeholder="hello@gmail.com"
                    size="md"
                    required
                    onChange={(event) =>{form.setFieldValue('email',event.target.value)}}
                    error={form.errors.email && 'Invalid Email'}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    mt="md"
                    size="md"
                    onChange={(event) =>{form.setFieldValue('password',event.target.value)}}
                    error={form.errors.password && 'Password must be at least 6 characters'}
                />
                    {type === "login" && (
                        <Checkbox label="Keep me logged in" mt="xl" size="md"
                                  onChange={(event) =>{form.setFieldValue('terms',event.target.checked)}}
                                  checked={form.values.terms}
                        />
                    )}
                <Button type="submit" fullWidth mt="xl" size="md">
                    {upperFirst(type)}
                </Button>
                </form>
                <Text ta="center" mt="md">
                    {type == "register" ? "Already have a account" : "Dont have a account?"}{' '}
                    <Anchor  fw={700} onClick={() => toggle()}>
                        {type === "register" ? "Login" : "Register"}
                </Anchor>
            </Text>
        </Paper>
</div>
)
    ;
}

export default AuthenticationForm