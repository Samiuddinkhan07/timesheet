import {
    Grid,
    Container,
    Skeleton,
    Card,
    Group,
    Text,
    Divider,
    Box

} from "@mantine/core";
import PieChartDiag from "../../Chart/PieChart.jsx";

const child = <Skeleton height={140} radius="md" animate={false}/>;


const Dashboard = () => {
    return (
        <>
            <Container size="xl">
                <Grid>
                    <Grid.Col span={{base: 12, xs: 6}}>
                        <Grid>
                            <Grid.Col span={{base: 12, xs: 12}}>
                                <Card withBorder>
                                    <Card.Section p={"md"}>
                                        <Group center>
                                            <Text>
                                                Timesheet Month:03-07-24
                                            </Text>
                                        </Group>
                                        <Divider my="md"/>
                                    </Card.Section>
                                    <Box component="div">
                                        <Grid>
                                            <Grid.Col span={{base: 12, xs: 6}}>
                                                <Text component="p">
                                                    Timesheet Start Date:
                                                </Text>
                                            </Grid.Col>
                                            <Grid.Col span={{base: 12, xs: 6}}>
                                                <Text component="p">
                                                    Timesheet End Date:
                                                </Text>
                                            </Grid.Col>
                                            <Grid.Col span={{base: 12, xs: 6}}>
                                                <Text component="p">
                                                    Feedback Cutoff Date:
                                                </Text>
                                            </Grid.Col>
                                            <Grid.Col span={{base: 12, xs: 6}}>
                                                <Text component="p">
                                                    Approval Cutoff Date:
                                                </Text>
                                            </Grid.Col>
                                        </Grid>
                                    </Box>
                                </Card>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, xs: 12}}>
                                <Card withBorder>
                                    <Card.Section p={"md"}>
                                        <Group center>
                                            <Text>
                                                Hours Total:
                                            </Text>

                                        </Group>
                                        <Divider my="md"/>
                                    </Card.Section>
                                </Card>
                            </Grid.Col><Grid.Col span={{base: 12, xs: 12}}>
                                <Card withBorder>
                                    <Card.Section p={"md"}>
                                        <Group center>
                                            <Text>
                                                Claim Total:
                                            </Text>

                                        </Group>
                                        <Divider my="md"/>
                                    </Card.Section>

                                </Card>
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, xs: 6}}>
                       <PieChartDiag/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Dashboard