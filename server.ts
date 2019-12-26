import server from "./app";
const PORT = process.env.PORT || 5000;
server.listen({ port: PORT }, (): void =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`
  )
);
