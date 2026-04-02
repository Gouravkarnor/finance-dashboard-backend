import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Dashboard API",
      version: "1.0.0",
      description: "Role-based finance backend API documentation"
    },
    servers: [
      {
        url: "http://localhost:5000/api"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter JWT token ONLY (without Bearer)"
        }
      },

      // 🔥 ADD THIS BLOCK
      schemas: {
        // USER RESPONSE
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string", example: "John Doe" },
            email: { type: "string", example: "john@gmail.com" },
            role: {
              type: "string",
              enum: ["admin", "analyst", "viewer"]
            },
            isActive: { type: "boolean", example: true },
            createdAt: { type: "string" },
            updatedAt: { type: "string" }
          }
        },

        // REGISTER INPUT
        RegisterInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", example: "John Doe" },
            email: { type: "string", example: "john@gmail.com" },
            password: { type: "string", example: "password123" },
            role: {
              type: "string",
              enum: ["admin", "analyst", "viewer"]
            }
          }
        },

        // LOGIN INPUT
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", example: "john@gmail.com" },
            password: { type: "string", example: "password123" }
          }
        },

        // RECORD RESPONSE
        Record: {
          type: "object",
          properties: {
            _id: { type: "string" },
            amount: { type: "number", example: 1000 },
            type: {
              type: "string",
              enum: ["income", "expense"]
            },
            category: { type: "string", example: "Food" },
            date: { type: "string", example: "2025-01-01" },
            notes: { type: "string" },
            createdBy: { type: "string" },
            isDeleted: { type: "boolean", example: false },
            createdAt: { type: "string" },
            updatedAt: { type: "string" }
          }
        },

        // CREATE/UPDATE RECORD INPUT
        RecordInput: {
          type: "object",
          required: ["amount", "type", "category"],
          properties: {
            amount: { type: "number", example: 1000 },
            type: {
              type: "string",
              enum: ["income", "expense"]
            },
            category: { type: "string", example: "Food" },
            date: { type: "string", example: "2025-01-01" },
            notes: { type: "string" }
          }
        },

        // PAGINATED RESPONSE
        RecordList: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Record"
              }
            },
            total: { type: "number", example: 100 },
            page: { type: "number", example: 1 },
            limit: { type: "number", example: 10 }
          }
        }
      }
    },

    security: [{ bearerAuth: [] }]
  },

  apis: ["./routes/**/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);