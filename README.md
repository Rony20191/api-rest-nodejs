# api-restfull-mysql



### Recuperar todos usuários

```http
GET /users
```
### Recuperar um usuário

```http
GET /user/:id
```
| `id` | `int` | **Required**. |


### Criar um usuário

```http
POST /user
```

#### Body in request

```javascript
{
  "nome" : string,
  "email" : string,
}
```
### Atualizar um usuário

```http
    PUT /user/:id
```
| `id` | `int` | **Required**. |
#### Body in request

```javascript
{
  "nome" : string,
  "email" : string,
}
```

### Apagar um usuário

```http
   DELETE /user/:id
```
| `id` | `int` | **Required**. |

