import server from "./app";
import { PORT } from "./constants/server.constants";

server.listen({ port: PORT }, (): void =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`
  )
);
